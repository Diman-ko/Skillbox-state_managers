  export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleTheme = (payload: string) => ({
    type: TOGGLE_THEME,
    payload, //  action  переключения темы toggleTheme берёт payload  пробрасывает в редюсер
});

