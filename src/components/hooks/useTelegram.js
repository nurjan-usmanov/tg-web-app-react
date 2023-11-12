const tg = window.Telegram.WebApp;

export function useTelegram(){
    const onClose = () => {
        tg.close();
    }

    const onTaggleButto = () => {
        if(tg.MainButton.isVisible){
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return {
        onClose,
        onTaggleButto,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}