import React, { createRef, lazy, Suspense } from 'react';

export default function Section() {

    const name = createRef(),
            email = createRef(),
            password = createRef(),
            password_confirmation = createRef(),
            gofw = createRef();

    const handleSubmit = e => {
        e.preventDefault();
        alert( JSON.stringify( [
            name.current.value,
            email.current.value,
            password.current.value,
            password_confirmation.current.value
        ] ) )

        gofw.current.focus();
    }

    const Article = lazy( () => {
        return new Promise( resolve => {
            setTimeout( ()=> {
                resolve(import( './Article' ));
            }, 1000)
        })
    });

    return <section>
        <h2 tabIndex={6} aria-label='Különálló de mégis egybetartozó cikkeket tartalmaz'>Section component</h2>
        <article className='container' style={ { minHeight: "0" } }>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend><h3>Regisztráció</h3></legend>
                    <label htmlFor='name'>Név</label>
                    <label>
                        <input type='text' id='name' aria-label='Add meg a neved' tabIndex={1} ref={name} />
                    </label>
                    <label htmlFor='email'>E-mail cím</label>
                    <label>
                        <input type='email' id='email' aria-label='Add meg az e-mail címed' tabIndex={2} ref={email} />
                    </label>
                    <label htmlFor='password'>Jelszó</label>
                    <label>
                        <input type='password' id='password' aria-label='Add meg a jelszót' tabIndex={3} ref={password} />
                    </label>
                    <label htmlFor='password_confirmation'>Jelszó megerősítése</label>
                    <label>
                        <input type='password' id='password_confirmation' aria-label='Add meg a jelszót újra' tabIndex={4} ref={password_confirmation} />
                    </label>
                    <button>Küldés</button>
                    <button ref={gofw}>Tovább</button>
                </fieldset>
            </form>
        </article>
        <Suspense fallback={<>Loading...</>}>
            <Article />
        </Suspense>
    </section>
}