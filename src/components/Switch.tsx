import React, { useState } from 'react'
import { components } from './';

interface Props{
  setThemes: React.Dispatch<React.SetStateAction<string>>;
  themes: string;
};

export default function Switch({themes, setThemes}:Props) {
  const [switched, setSwitched] = useState(false);

  const changeState = () => {
    setSwitched(!switched);
    changeMode();
  };

  const changeMode = () => {
    if(themes === 'colorsLight'){
      setThemes('colorsDark');
    }
    else{
      setThemes('colorsLight');
    }
  };

  return (
    <components.SwitchHandler>
        <components.Switch>
            <components.ButtonSwitch onClick={ () => changeState() } switched={switched}/>
        </components.Switch>
    </components.SwitchHandler>
  )
}
