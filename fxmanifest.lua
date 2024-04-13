fx_version 'cerulean'

games {"gta5"}

author "Stormix"
description "--"
version '1.0.0'

lua54 'yes'

ui_page 'dist/web/index.html'

client_script "dist/client/**/*"
server_scripts {'@oxmysql/lib/MySQL.ts', "dist/server/**/*"}

files {
  'dist/web/index.html',
  'dist/web/js/index.js',
  'dist/web/assets/index.css'
}
