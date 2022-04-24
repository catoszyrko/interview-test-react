import React,{useState} from 'react';
import image  from '../../assets/img/img-3.png';

function Article(s){
    const category = s.props.category
    const title = s.props.title
    const [tipo,setTipo] = useState(0)

    
    return (
        
        <>
            <div class="col-3 box-image center mr-0">
                <div class="card shadow">
                    <figure >
                        <img src={image} alt="" class="img-fluid" />
                    </figure>
                    <span class="card-type mt-4"><b class="dark-grey">{category}</b> </span>
                    <span class="small-bar bg-green"></span>
                    <div class="card-title">
                        <b>{title}</b>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Article;