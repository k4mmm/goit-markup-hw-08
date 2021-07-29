'use strict';

class Tabs {
    constructor({ rootId, activeClassControl,disabledCardClass }) {
        this._refs = this._getRefs(rootId);
        this._bindEvents();
        this._activeControlClass = activeClassControl;
        this._disabledCardClass = disabledCardClass;
    }

    _getRefs(root) {
        const refs = {};
        refs.controls = document.querySelector(`${root} [data-controls]`)
        refs.cards = document.querySelector(`${root} [data-cards]`)
        
        return refs
    }

    _bindEvents() {
        this._refs.controls.addEventListener('click', this._onControlClick)
    }

    _onControlClick = e => {
        e.preventDefault();
        if (e.target.nodeName !== "BUTTON") {
            return
        }

        this._removeActiveClass(`${this._activeControlClass}`)
        const controlBtn = e.target;
        controlBtn.classList.add(`${this._activeControlClass}`);
        const cardСontrolData = controlBtn.dataset.type;
        const cardSet = this._refs.cards.children;
        this._disableCard(cardSet, cardСontrolData);
    }
    
    _removeActiveClass = (activeClass) => {
        const activeControlBtn = this._refs.controls.querySelector(`.${activeClass}`)
        if (activeControlBtn) {
            activeControlBtn.classList.remove(`${activeClass}`)
        }
        return
    }
    
    _disableCard = (cards, btnDate) => {
        [...cards].forEach((el) => {
            if (el.dataset.type === btnDate || btnDate === "all") {
                el.classList.remove(`${this._disabledCardClass}`)
            } else {
                el.classList.add(`${this._disabledCardClass}`)
            }
        
        })
    
    }
}

    const tabs1 = new Tabs({
        rootId: "#tabs-1",
        activeClassControl: "portfolio__item--active",
        disabledCardClass: "disabled"
    })
    


