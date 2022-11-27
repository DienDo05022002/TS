import { createContext , ReactNode , useState } from 'react'

interface ThemeContextProps {
    children: ReactNode 
}

interface ThemeContextDefault {
    theme: string
}
const themeContextDefaultData = {
    theme: 'primary'
}

export const ThemeContext = createContext<ThemeContextDefault>(themeContextDefaultData)

const ThemeProvider = ({children}: ThemeContextProps) => {
    const [theme, setTheme] = useState(themeContextDefaultData.theme)
    const toggleTheme = () => setTheme(theme)

    const themeContextDynamicData = {theme, toggleTheme}
  return (
    <ThemeContext.Provider value={themeContextDynamicData}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider