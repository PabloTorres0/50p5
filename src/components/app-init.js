import { LitElement, html, css } from 'lit-element';
import styles from './app-init.css' assert { type: 'css' }; 


export class AppInit extends LitElement {

    static styles = [styles];

    static get properties(){
        return{
            cont:{
                type:Number
            }
        }
    }

    constructor() {
        super()
        this.cont = 0
        this.intervaleId=0;
    }
    
    contInit = () => {
       this.intervaleId= setInterval(()=>{
            this.cont = this.cont+1
            console.log(this.cont) 
            if(this.cont===100){
                clearInterval(this.intervaleId)
            }
        },30)

    }

    firstUpdated() {
        this.contInit()
    }

    render() {
        return html`
            <div class=${this.cont === 0 ? 'container container-active1' : 'container container-active2'}>
            </div>
            <div class='div-container'>
                <h1 class=${this.cont > 70 ?'h1-active':''}>${this.cont} %</h1>
            </div>
            
            `;
    }
}
customElements.define('app-init', AppInit);