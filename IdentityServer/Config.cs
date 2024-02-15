using Duende.IdentityServer;
using Duende.IdentityServer.Models;

namespace IdentityServer;

public static class Config
{
    public static IEnumerable<IdentityResource> IdentityResources =>
        new IdentityResource[]
        { 
            new IdentityResources.OpenId(),
            new IdentityResources.Profile()
        };

    public static IEnumerable<ApiScope> ApiScopes =>
        new List<ApiScope>
        {
            new ApiScope(name: "api1", displayName: "MyAPI") 
        };

    public static IEnumerable<Client> Clients =>
        new List<Client>
        {
            new Client
            {
                ClientId = "client",

                
                AllowedGrantTypes = GrantTypes.ClientCredentials,

                
                ClientSecrets =
                {
                    new Secret("secret".Sha256())
                },

                
                AllowedScopes = { "api1" }
            },
            
            new Client
            {
                ClientId = "web",
                ClientSecrets = { new Secret("secret".Sha256()) },

                AllowedGrantTypes = GrantTypes.Code,
            
                
                RedirectUris = { "https://localhost:5002/signin-oidc" },

                
                PostLogoutRedirectUris = { "https://localhost:5002/signout-callback-oidc" },

                AllowedScopes = new List<string>
                {
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile
                }
            },
            // React Client
            new Client
            {
                ClientId = "js",
                ClientName = "JavaScript Client",
                AllowedGrantTypes = GrantTypes.Code,
                RequireClientSecret = false,
    
                RedirectUris =           { "http://localhost:3000/callback" },
                PostLogoutRedirectUris = { "http://localhost:3000" },
                AllowedCorsOrigins =     { "http://localhost:3000" },

                AllowedScopes = 
                {
                    IdentityServerConstants.StandardScopes.OpenId,
                    IdentityServerConstants.StandardScopes.Profile,
                    "api1"
                }
            }
        };
}