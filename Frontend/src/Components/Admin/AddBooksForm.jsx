import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';


const AddBook = () => {
    const schema = yup.object().shape({
        title: yup.string().required(),
        pdf_url: yup.string().required(),
        authorName: yup.string().required(),
        categoryName: yup.string().required(),
        price: yup.number().required(),
        image: yup.string().required(),
    
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data) => {
        axios.post('http://localhost:8081/Books/', data)
            .then(response => {
                response.data.message && alert(response.data.message)
            })
    };
    return (
        <div>
            <h1>Add Book</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" 
                    id="title" placeholder="Enter Title" {...register("title")} />
                    <p>{errors.title?.message}</p>
                    <input type="text" className="form-control"
                        id="pdf_url" placeholder="Enter pdf_url" {...register("pdf_url")} />
                    <p>{errors.pdf_url?.message}</p>
                    <input type="text" className="form-control"
                        id="authorName" placeholder="Enter authorName" {...register("authorName")} />
                    <p>{errors.authorName?.message}</p>
                    <input type="text" className="form-control"
                        id="categoryName" placeholder="Enter categoryName" {...register("categoryName")} />
                    <p>{errors.categoryName?.message}</p>
                    <input type="text" className="form-control"
                        id="price" placeholder="Enter price" {...register("price")} />
                    <p>{errors.price?.message}</p>
                    <input type="file" className="form-control" accept='"image/*"'
                        id="image" placeholder="Enter image" {...register("image")} />
                    <p>{errors.image?.message}</p>
                    <button type="submit" className="btn btn-primary">Submit</button>
        </div>
            </form>
        </div>

                
    )

}

export default AddBook;