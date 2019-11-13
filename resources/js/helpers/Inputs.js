import React, {useState} from "react";
import DatePicker from 'react-date-picker';


export const Input = ({type, orientation, name, title, value, error}) => {
    if(orientation == 'h'){
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{title} :</label>
                <div className="col-sm-10">
                    <input name={name} type={type} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name} />
                    {error !== undefined?(
                        error.map((e,i)=>
                            <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                        )
                    ):null}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="form-group">
                <label htmlFor={name}>{title}</label>
                <input name={name} type={type} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name} />
                {error !== undefined?(
                    error.map((e,i)=>
                        <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                    )
                ):null}
            </div>
        );
    }
}

export const Select = ({orientation, name, title, options, value, error}) => {
    if(orientation == 'h'){
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{title} :</label>
                <div className="col-sm-10">
                    <select  name={name} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name}>
                        <option value="">Choose {title}</option>
                        {options.map(option =>(<option key={option.value} value={option.value}>{option.title}</option>))}
                    </select>
                    {error !== undefined?(
                        error.map((e,i)=>
                            <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                        )
                    ):null}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="form-group">
                <label htmlFor={name}>{title}</label>
                <select  name={name} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name}>
                    <option value="">Choose {title}</option>
                    {options.map(option =>(<option key={option.value} value={option.value}>{option.title}</option>))}
                </select>
                {error !== undefined?(
                    error.map((e,i)=>
                        <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                    )
                ):null}
            </div>
        );
    }
}

export const Range = ({orientation, name, title, options, value, error}) => {

    const Options = () => {
        let opts = [];
        for(let i=options.min; i<=options.max; i++){
            opts.push(<option key={i} value={i}>{i}</option>);
        }
        return opts;
    }

    if(orientation == 'h'){
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{title} :</label>
                <div className="col-sm-10">
                    <select  name={name} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name}>
                        <option value="">Choose {title}</option>
                        {Options()}
                    </select>
                    {error !== undefined?(
                        error.map((e,i)=>
                            <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                        )
                    ):null}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="form-group">
                <label htmlFor={name}>{title}</label>
                <select  name={name} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name}>
                    <option value="">Choose {title}</option>
                    {Options()}
                </select>
                {error !== undefined?(
                    error.map((e,i)=>
                        <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                    )
                ):null}
            </div>
        );
    }
}

export const TextArea = ({orientation, name, title, value, error}) => {
    if(orientation == 'h'){
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{title} :</label>
                <div className="col-sm-10">
                    <textarea name={name} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name}></textarea>
                    {error !== undefined?(
                        error.map((e,i)=>
                            <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                        )
                    ):null}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="form-group">
                <label htmlFor={name}>{title}</label>
                <textarea name={name} defaultValue={value} className={error !== undefined?'form-control is-invalid':'form-control'} id={name}></textarea>
                {error !== undefined?(
                    error.map((e,i)=>
                        <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                    )
                ):null}
            </div>
        );
    }
}

export const DateInput = ({orientation, format, saveFormat, name, title, value, error, min, max}) => {
    const [date, setDate] = useState(value!=null?new Date(value):null);
    const minDate = min!=null ? moment().add(min, 'y')._d : null;
    const maxDate = max!=null ? moment().add(max, 'y')._d : null;
    const onChange = date =>{
        setDate(date);
    }

    if(orientation == 'h'){
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{title} :</label>
                <div className="col-sm-10">
                    <DatePicker format={format} minDate={minDate} maxDate={maxDate} value={date} onChange={onChange}/>
                    <input type="hidden" name={name} defaultValue={date!=null?moment(date).format(saveFormat):''} className={error !== undefined?'form-control is-invalid':'form-control'} id={name} />
                    {error !== undefined?(
                        error.map((e,i)=>
                            <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                        )
                    ):null}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="form-group">
                <label htmlFor={name}>{title}</label>
                <DatePicker format={format} minDate={minDate} maxDate={maxDate} value={date} onChange={onChange}/>
                <input type="hidden" name={name} defaultValue={date!=null?moment(date).format(saveFormat):''} className={error !== undefined?'form-control is-invalid':'form-control'} id={name} />
                {error !== undefined?(
                    error.map((e,i)=>
                        <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                    )
                ):null}
            </div>
        );
    }
}

export const ImgUplaoder = ({orientation, name, title, base_url,  value, error}) => {
    let licence_img = value != null ? base_url+'/'+value : base_url+"/placer.png";
    const [preview, setPreview] = useState(licence_img);
    const onSelectFile = (e) => {
        if (e.target.files || e.target.files.length > 0) {
            let file = e.target.files[0];
            let reader = new FileReader();
            let url = reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                setPreview(reader.result);
            }.bind(this);
        }
    }
    if(orientation == 'h'){
        return (
            <div className="form-group row">
                <label htmlFor={name} className="col-sm-2 col-form-label">{title} :</label>
                <div className="col-sm-10">
                    {preview &&  <img className="image_previewer" src={preview} /> }
                    <input type="file" name={name} onChange={onSelectFile} className={error !== undefined?'form-control is-invalid':'form-control'} id={name} />
                    {error !== undefined?(
                        error.map((e,i)=>
                            <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                        )
                    ):null}
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="form-group">
                <label htmlFor={name}>{title}</label>

                <input type="file" name={name} defaultValue={date!=null?moment(date).format(saveFormat):''} className={error !== undefined?'form-control is-invalid':'form-control'} id={name} />
                {error !== undefined?(
                    error.map((e,i)=>
                        <span key={'err_email'+i} className="invalid-feedback">{e}</span>
                    )
                ):null}
            </div>
        );
    }
}