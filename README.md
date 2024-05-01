**Prerequisites:**

1. [Git](https://git-scm.com/)
2. [pnpm 8](https://pnpm.io/)
3. [Node JS 21](https://pnpm.io/cli/env)
4. [Android Studio](https://developer.android.com/studio)

## Steps to develop

1. Clone repository, run command `git clone https://github.com/yuan116/capacitor-photo-sphere-viewer-bug.git`
2. Install node modules, run command `pnpm install`
3. Start dev server, run command `pnpm run dev`
4. Open Android Studio, run command `pnpm exec capacitor open android`
5. Click `Run 'app'` in android studio to install the app in your device **(Require Developer options Enabled)** or emulator

## Steps to build

1. Follow [Steps to develop](#steps-to-develop)'s step 1 and 2
2. Build distribution, run command `pnpm run build`
3. Click `Run 'app'` in android studio to install the app in your device **(Require Developer options Enabled)** or emulator
