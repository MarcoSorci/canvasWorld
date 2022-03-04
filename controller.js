class Controller {

    constructor() {
        this.isUpClicked = false;
        this.isLeftClicked = false;
        this.isRightClicked = false;
        this.isDownClicked = false;
        document.addEventListener('keydown', (event) => this.onKeyDown(event))
        document.addEventListener('keyup', (event) => this.onKeyUp(event))
    }

    onKeyDown(event) {
        if (event.key === "ArrowUp") {
            this.isUpClicked = true;
        }
        if (event.key === "ArrowDown") {
            this.isDownClicked = true;
        }
        if (event.key === "ArrowLeft") {
            this.isLeftClicked = true;
        }
        if (event.key === "ArrowRight") {
            this.isRightClicked = true;
        }
    }

    onKeyUp(event) {
        if (event.key === "ArrowUp") {
            this.isUpClicked = false
        }
        if (event.key === "ArrowDown") {
            this.isDownClicked = false
        }
        if (event.key === "ArrowLeft") {
            this.isLeftClicked = false
        }
        if (event.key === "ArrowRight") {
            this.isRightClicked = false
        }
    }
}
