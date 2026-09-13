{
  description = "Astro + Tailwind Web Project Template";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          name = "web-template-shell";
          packages = with pkgs; [
            nodejs_22
            nodePackages.pnpm
          ];

          shellHook = ''
            echo "🚀 Astro + Web Development Environment Loaded"
            echo "Node.js: $(node -v) | pnpm: $(pnpm -v 2>/dev/null || echo 'installed')"
          '';
        };
      }
    );
}
