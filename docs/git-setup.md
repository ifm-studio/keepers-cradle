# Git Setup

## Conventional Commits

Commits to source control MUST adhere to the
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.

The Conventional Commits extension, which is installed by default, allows for
conventional commits from the Source Control panel in VSCode by selecting the
circular button.

## DCO Sign All Commits

All commits must be DCO signed.

```bash
git commit -s -m 'feat: add example commit'
```

## Manual SSH Key

If authentication is not automatically copied over necessary to push, follow
these steps to create SSH credientals to gain authorization to repository.

1. Create SSH key and add SSH public key printed to your
   [Github SSH Keys](https://github.com/settings/ssh/new)

   ```bash
   sudo ssh-keygen -o -N '' -f ~/github-ssh-key/github.com
   cat ~/github-ssh-key/github.com.pub
   ```

2. Create a ~/.ssh/config

   ```bash
   Host github.com
      User hxtree
      HostName github.com
      IdentityFile ~/github-ssh-key/github.com
   ```

3. Verify it works by pushing code.

The SSH key will be stored on a persistant Docker volume, which should enable
this to be a one time procedure that persist between builds.
