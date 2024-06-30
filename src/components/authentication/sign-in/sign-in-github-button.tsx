import { Button } from '@/components/ui/button';

import { signInWithGithub } from '@/lib/auth/actions';

import { GitHubLogoIcon } from '@radix-ui/react-icons';

export function SignInGithubButton() {
  return (
    <form action={signInWithGithub}>
      <Button className="w-[110px]" variant="outline" type="submit">
        <GitHubLogoIcon className="mr-2 h-5 w-5" />
        Sign In
      </Button>
    </form>
  );
}
