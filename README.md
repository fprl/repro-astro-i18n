# astro-i18n reproduction repo

Hey there, thanks for checking this. These are the steps I took:

1. Created a new astro project and added the library with the serverless command:
```bash
./node_modules/.bin/astro-i18n install --serverless
```

2. Created `src/i18n/common/en.json` file.

3. Run `pnpm dev`.

Once I visit the index page, I get this error:
```
node:fs:1527
  handleErrorFromBinding(ctx);
  ^

Error: ENOENT: no such file or directory, scandir
```

Thanks!
