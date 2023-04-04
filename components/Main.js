import React, { lazy, Suspense } from "react";

export default function Main( { colorToggle } ) {

    const Section = lazy( () => {
        return new Promise( resolve => {
            setTimeout( ()=> {
                resolve(import( './Section' ));
            }, 1000)
        })
    });
  
    return (
        <main className="container">
            <h1 tabIndex={5} aria-label="Fő tartalmi rész">Main component</h1>
            <Suspense fallback={<>Loading...</>}>
              <Section />
            </Suspense>
            <button onClick={colorToggle}>Témaváltás</button>
        </main>
    );
  }