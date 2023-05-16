
export function useTheme():[string, (theme:string)=>void] {
  var currentTheme = Array.from(document.body.classList).find(k => k.startsWith('theme-'))?.substring(6)??"light";
console.log(currentTheme);
  return [currentTheme,
    (theme) => {
      console.log("theme to set",theme)
      document.body.classList.remove('theme-' + currentTheme);
      document.body.classList.add('theme-' + theme);
      currentTheme='theme-' + theme;
    }
  ];
}
