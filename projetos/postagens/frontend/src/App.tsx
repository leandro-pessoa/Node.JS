import React, {ChangeEvent} from 'react'
import './App.css'
import axios from 'axios'

interface Props {

}

export default class App extends React.Component<Props>{
  state: {
    titulo: string, 
    conteudo: string,
    postagens: object[]
  }

  constructor(props: Props){
    super(props)
    this.state = {
      titulo: '',
      conteudo: '',
      postagens: []
    }
    
  }

  setTitulo(e: ChangeEvent<HTMLInputElement>): void{
    this.setState({titulo: e.target.value})
  }
  setConteudo(e: ChangeEvent<HTMLTextAreaElement>): void{
    this.setState({conteudo: e.target.value})
  }

  componentDidMount(): void {
    axios.get('http://localhost:3000/get')
      .then(res => {
        this.setState({postagens: res.data})
      })
  }

  enviar(): void{
    if(this.state.titulo != '' && this.state.conteudo != ''){
      axios.post('http://localhost:3000/postar', {
        titulo: this.state.titulo,
        conteudo: this.state.conteudo
      })
    }
  }

  excluir(e: any): void{
    axios.put('http://localhost:3000/excluir', {
      pk: e.target.dataset.pk
    })
  }

  renderPostagens(): JSX.Element[] | JSX.Element{
    if(this.state.postagens.length < 1){
      return(
        <div className='naoha'>
          Não há postagens
        </div>
      )
    }
    else{
      return this.state.postagens.map(
        (post: {titulo?: string, conteudo?: string, id?: number}) => <div className='post'>
          <div className='buttons'>
            <p>
              <h3>{post.titulo}</h3>
            </p>
            <p>
              <button 
                data-pk={post.id}
                onClick={(e)=>this.excluir(e)}
              >
                Excluir post
              </button>
              <button>
                Editar post
              </button>
            </p>
          </div>
          <p>{post.conteudo}</p>
        </div>
      )
    }
  }

  render(): React.ReactNode{
    return(
      <>
        <main>
          <h2 className='postagens'>Postagens</h2>
          <section className='postagens'>
            {this.renderPostagens()}
          </section>
          <section className='form'>
            <h2>Formulário</h2>
            <div>
              <label htmlFor="tit">Título</label><br/>
              <input
                type="text"
                id="tit"
                value={this.state.titulo}
                onChange={(e)=>this.setTitulo(e)}
              />
            </div>
            <div>
              <label htmlFor="cont">Conteúdo</label><br/>
              <textarea
                id="cont"
                value={this.state.conteudo}
                onChange={(e)=>this.setConteudo(e)}
                placeholder='Insira seu texto aqui'
              ></textarea>
            </div>
            <div>
              <button onClick={()=>this.enviar()}>
                Enviar
              </button>
            </div>
          </section>
        </main>
      </>
    )
  }
}
