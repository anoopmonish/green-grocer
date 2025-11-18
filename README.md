# Tauri + Angular

This template should help get you started developing with Tauri and Angular.

## Recommended IDE Setup

[VS Code] (https://code.visualstudio.com/)  
[Tauri] (https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode)  
[rust-analyzer] (https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)  
[Angular Language Service] (https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

# To change icon:  
npm run tauri icon ./original-icon-transparent.png  
All icons will be generated at ./src-tauri/icons  
rmdir /s /q "./src-tauri/icons/android"  
rmdir /s /q "./src-tauri/icons/ios"  


# To run the app:  
cd green-grocer  
npm install  
npm run tauri dev


# Before commit:
npm run lint  
npm run format  
