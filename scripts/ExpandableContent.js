import pxToRem from './utils/pxToRem.js';

const RootSelector = '[data-js-expandable-content]'

class ExpandableContent {
    selectors = {
        root: RootSelector,
        button: '[data-js-expandable-content-button]'
    }

    stateClasses = {
        isExpanded: 'is-expanded',
    }

    animationsParams = {
        duration: 500,
        easing: 'ease',
    }

    constructor(rootElement) {
        this.rootElement = rootElement
        this.buttonElement = this.rootElement.querySelector(this.selectors.button)
        this.bindEvents()
    }

    expand() {
        const { offsetHeight, scrollHeight } = this.rootElement

        this.rootElement.classList.add(this.stateClasses.isExpanded)
        this.rootElement.animate([
            {
                maxHeight: `${pxToRem(offsetHeight)}rem`,
            },
            {
                maxHeight: `${pxToRem(scrollHeight)}rem`,
            },
        ], this.animationsParams)
    }

    onButtonClick = () => {
        this.expand()
    }

    bindEvents() {
        this.buttonElement.addEventListener('click', this.onButtonClick)
    }
}

class ExpandableContentCollection {
    constructor() {
        this.init()
    }

    init() {
        document.querySelectorAll('[data-js-tabs]').forEach((element) => {
            new ExpandableContent(element)
        })
    }
}

export default ExpandableContentCollection