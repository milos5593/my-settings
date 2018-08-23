module.exports = {
  updateChannel: 'canary',
  config: {
    // default font size in pixels for all tabs
    fontSize: 16,
    windowSize: [1366, 768],
    fontFamily: '"Fira Code", "Operator Mono", "Inconsolata for Powerline", monospace',
    cursorShape: 'BLOCK',
    wickedBorder: true,
    padding: '10px',
    shell: '',
    shellArgs: ['/k', 'C:\\cmder\\vendor\\init.bat'],
    env: { 'TERM':'cygwin' }, // required for git-for-windows
    summon: {
      hideDock: true,
      hideOnBlur: true,
      hotkey: 'Alt+T'
    }
  },


  plugins: [
    'hyperterm-cobalt2-theme',
    'hyperterm-summon'
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  // localPlugins: ['hyperterm-cobalt2-theme'],
};
