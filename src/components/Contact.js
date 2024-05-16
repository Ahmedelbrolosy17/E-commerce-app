import Form from 'react-bootstrap/Form';

export default function Contact(){

    return(
        <div className="container">
        <h1 className='my-5'>let us know what you are thinking of!</h1>
        <form>
            <div class="form-group mb-2">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group mb-2">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control mt-1" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div class="form-group mb-2">
                <textarea className='form-control' placeholder='your message' rows={5} cols={15}/> 
            </div>
            <div class="form-check mb-2">
                <input type="checkbox" class="form-check-input mt-1" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">confirm</label>
            </div>
            <button type="submit" class="btn btn-outline-primary px-5">send</button>
        </form>
        </div>
    );
};