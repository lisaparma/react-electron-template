module.exports = {
  "packagerConfig": {
    "icon": "src/icons/mac/icon.icns",
    "name": "React + Electron App",
    "executableName": "react-electron-template" // same of package.json name
  },
  "makers": [
    {
      "name": "@electron-forge/maker-squirrel",
      "config": {
        "name": "cra_electron_forge_demo"
      }
    },
    // MacOS
    {
      "name": "@electron-forge/maker-zip",
      "platforms": [
        "darwin"
      ]
    },
    // Linux
    {
      "name": "@electron-forge/maker-deb",
      "config": {}
    }
  ]
}
