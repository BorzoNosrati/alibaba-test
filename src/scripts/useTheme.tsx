
export function useTheme(): [string, (theme: string) => void] {
  const setTheme = (theme: string) => {
    document.body.classList.remove('theme-' + currentTheme);
    document.body.classList.add('theme-' + theme);
  }

  let currentTheme = Array.from(document.body.classList).find(k => k.startsWith('theme-'))?.substring(6);
  if (!currentTheme) {
    currentTheme = "light"
    setTheme(currentTheme)
  }
  console.log(currentTheme);
  return [currentTheme, setTheme];
}
