import { Bell, Moon, Settings, Sun, UserRound } from "lucide-react";
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

interface SectionTopProps {
  state: string;
  setState: (newState: string) => void;
}

export default function SectionTop({ state, setState }: SectionTopProps) {
  // Obtém o contexto do tema
  const themeContext = useContext(ThemeContext);

  // Verifica se o contexto existe antes de usar 'theme' e 'setTheme'
  if (!themeContext) {
    return <p>Contexto não encontrado!</p>; // Exibe uma mensagem de erro adequada
  }

  const { theme, setTheme } = themeContext;

  return (
    <header className={`flex items-center justify-end gap-x-3 px-3 py-6 h-[84px] ${theme === 'dark' ? 'dark' : ''}`}>
      <Settings className="icons" />
      <Bell className="icons" />
      <UserRound className="icons" />
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
         {theme === 'light' ? <Moon className="icons"/> : <Sun className="icons"/>}
      </button>
    </header>
  );
}
