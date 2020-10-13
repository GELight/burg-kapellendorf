# burg-kapellendorf

# 1. Node Version auf 8.0.0 setzen
nvm use 8.0.0

# 2. Eventuell muss nach dem NVM noch mal die Ember CLI installiert werden, da durch das geänderte Node eine Verlinkung in einen neuen Node-Ordner gesetzt wird, wo evtl. noch keine CLI zu finden ist.
npm install -g ember-cli

# 3. Dev-Server starten
ember serve

# Seite öffnen
http://localhost:4200
