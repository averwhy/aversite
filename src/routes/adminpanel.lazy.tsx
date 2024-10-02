import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { InputText } from 'primereact/inputtext'
import { Password } from 'primereact/password'
import { useState } from 'react'

export const Route = createLazyFileRoute('/adminpanel')({
  component: Portfolio,
})

function Portfolio() {
  const [userIsEmpty, setUserIsEmpty] = useState(false);
  const [pwIsEmpty, setPWIsEmpty] = useState(false);
  const [buttonToggle, setButtonToggle] = useState(false);
  const [userValue, setUserValue] = useState('')

  const userPT = {
    root: { className: "text-black" }
  }

  const passwordPT = {
    input: { className: "text-black" },
    root: { className: "pb-2" }
  }

  const buttonPT = {
    label: { className: "p-3" }
  }

  function userOnChange(e: React.ChangeEvent<HTMLInputElement>){
    if (e.target.value.length === 0){
      setUserIsEmpty(true);
    } else {
      setUserIsEmpty(false);
    }

    if (userIsEmpty && pwIsEmpty){
      setButtonToggle(false);
      console.log("button is disabled");
    }
    else if (!userIsEmpty && !pwIsEmpty) {
      setButtonToggle(true);
      console.log("button is enabled");
    }
  }
  return (
    <div className="h-screen p-2 text-white">
      <div className="container mx-auto flex justify-center place-self-center">
        <p className="text-4xl tracking-wide">
          admin login
        </p>
      </div>
      <div className="flex justify-center p-3">
        <Card className="bg-slate-600 font-mono text-white">
          <p>username</p>
          <InputText onChange={userOnChange} pt={userPT}/>
          <br/>
          <p>password</p>
          <Password pt={passwordPT}/>
        </Card>
      </div>
      <div className="flex justify-center p-3">
        <Button label='let me in' disabled={buttonToggle} className='bg-green-700' pt={buttonPT}/>
      </div>
    </div>
  )
}