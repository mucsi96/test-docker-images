package io.github.mucsi96.demo.message;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.mucsi96.authtools.azure.AzureAuthenticationPrincipal;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MessageController {
    private final MessageRepository messageRepository;

    @PreAuthorize("hasAuthority('ROLE_Reader') and hasAuthority('SCOPE_read')")
    @GetMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
    public MessageResponse getMessage(
            @Parameter(hidden = true) Authentication authentication) {
        AzureAuthenticationPrincipal principal = (AzureAuthenticationPrincipal) authentication.getPrincipal();
        return new MessageResponse(
                "Hi " + principal.getName() + "! " + messageRepository.findAll().get(0).getContent());
    }
}
