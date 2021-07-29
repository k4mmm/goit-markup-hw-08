const refs = {
        controls: document.querySelector('#tabs-1 [data-controls]'),
        cards: document.querySelector('[data-cards]')
    }

    refs.controls.addEventListener('click', e => {
        e.preventDefault();
    
        if (e.target.nodeName !== "BUTTON") {
            return
        }

        removeActiveClass('portfolio__item--active')
        const controlBtn = e.target;
        controlBtn.classList.add("portfolio__item--active");
    
        const cardСontrolData = controlBtn.dataset.type;
        const cardSet = refs.cards.children;
        disableCard(cardSet, cardСontrolData);
      })

    const removeActiveClass = (activeClass) => {
        const activeControlBtn = refs.controls.querySelector(`.${activeClass}`)
        if (activeControlBtn) {
            activeControlBtn.classList.remove(`${activeClass}`)
        }
        return
    }

    const disableCard = (cards, btnDate) => {
        [...cards].forEach((el) => {
            if (el.dataset.type === btnDate || btnDate === "all" ) {
                el.classList.remove("disabled")
            } else {
                el.classList.add("disabled")
            }
        
            })
    }