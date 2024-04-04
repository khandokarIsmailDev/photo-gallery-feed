# this project is included INTERNATIONALIZATION,INTERCEPTION ROUTE

# ai project j intercepting route use kora hoise
- photo te click korle new page photo detail e open hoy, but amra chai same page modal akare open hok
- so er jonno intercepting route create korbo,
-  intercepting route mane (http://localhost:3000/photo) er (./) mane same folder e intercepting folder (.)photos ,then tar bito [id] and then page.js hobe
- orthat j page ta intercepting korbo tar same name and same structure tai hobe, e kheter amra jehoto photo detail modal akare show korbo, photo detail er sob kico intercpting korlam



### Modal.jsx file 

```js
const Modal = ({children}) => {
    

    return createPortal(
        <dialog>

        </dialog>,
        document.getElementById("modal-root-content")
    )
};


```

- akhane createPortal 2 ta argument ney, dialog er modde ja likbo, oi sob content 'modal-root-content' name id te bosaya dibe ai createPortal# Modal er jonno html er default 'dialog' use korbo
- javascript er default babe show modal name poperty ase ja dialog element upori sodo kaj kore, amra tai use korbo



# Modal er jonno html er default 'dialog' use korbo
- javascript er default babe show modal name poperty ase ja dialog element upori sodo kaj kore, amra tai use korbo


# akhon problem holo modal to kaj korse,but modal ta background bluri hose na, 

- er jonno amra agei dialog use korsi, ai dialog backdrop name akta property dey, oi porperty class global.css e use korlei hobe

```css
dialog::backdrop {
    background: rgba(0,0,0,0.55)
}

```
