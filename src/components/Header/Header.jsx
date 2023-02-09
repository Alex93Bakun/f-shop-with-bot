import React, { useEffect } from "react";
import Button from "../Button/Button";

const tg = window.Telegram.WebApp;

const Header = () => {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return (
    <header className="header">
      <Button onClick={onClose}>Закрити</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </header>
  );
};

export default Header;
