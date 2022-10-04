# eslint-config-psfe

## Usage

**Before read low，please install vscode extensions：`Eslint`，if you have installed like \*prettier\*,\*formatter\* extensions，please uninstall them!!!!**

**First：** 

```bash
npm i eslint-config-psfe --save-dev
```

**Second：** 

```bash
npx install-peerdeps --dev eslint-config-psfe
```

**Finally：**

Create a new file named `.eslintrc` in your **root path**，and write in below

```json
{
    "extends": [
        "eslint-config-psfe"
    ]
}
```

Create .vscode/settings.json
```
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
## Q/A

### Delete `␍`eslintprettier/prettier

Resolve: 点击vscode右下角的【选择行尾序列】，切换成LF即可