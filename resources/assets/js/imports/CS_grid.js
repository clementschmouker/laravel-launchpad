

export default class CS_grid {

    constructor(params) {
        console.log('init grid')

        this.gPressed = false;
        this.ctrlPressed = false;
        this.wPressed = false;

        this.$els = {
            body: document.querySelector('body')
        }

        this.baseValues = {
            colNumber : 9,
        };

        // base col number is 9
        this.colNumber = (params.colNumber > 0) ? params.colNumber : this.baseValues.colNumber;

        this.createElements()
        this.bindEvents()
    }




    createElements() {
        this.gridCtn = document.createElement('div');
        this.gridCtn.classList.add('grid-container');        
        // grid CTN style


        this.gridCols = []
        for (var i = 0; i < this.colNumber; i += 1) {
            const col = document.createElement('span');
            col.classList.add('grid-column');
            // grid COL style
            this.gridCtn.appendChild(col);
        }
        // Appends grid to DOM
        this.$els.body.appendChild(this.gridCtn);
    }




    bindEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'g') {
                this.gPressed = true;
            }
            if (e.key == 'w') {
                this.wPressed = true;
            }
            if (e.keyCode == 18) {
                this.ctrlPressed = true;
            }

            if (this.gPressed && this.ctrlPressed) {
                this.openGrid();
            }

            if (this.wPressed && this.ctrlPressed && this.gridCtn.classList.contains('is-open')) {
                this.gridCtn.classList.toggle('white');
            }
        });

        window.addEventListener('keyup', e => {
            if (e.key == 'g') {
                this.gPressed = false;
            }
            if (e.key == 'w') {
                this.wPressed = false;
            }
            if (e.keyCode == 18) {
                this.ctrlPressed = false;
            }
        })
    }

    openGrid() {
        this.gridCtn.classList.toggle('is-open');
    }

}