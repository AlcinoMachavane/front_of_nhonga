import { useState, ChangeEvent } from "react";
import "./Register.css";
import "./../../components/buttons/Standard_button.css"
import default_image from "../../assets/images/system_images/icon/upload.png"

function Register() {
    const [imagePreview, setImagePreview] = useState<string>(default_image); // Imagem local

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Verifica se um arquivo foi selecionado
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setImagePreview(e.target.result as string); // Atualiza a pré-visualização
                }
            };
            reader.readAsDataURL(file);
        }
    };

    // Numero maximo de caracteres para a descricao da empresa
    const maxLength = 56;

    //Mensagem de erro para campo vazio
    const empty_error_massage = "Este campo não pode estar vazio"

    return (

        <>
            <main className={"main_of_page"}>
                <section className={"standard_section centralize"}>
                    <form className={"company_registration_form"}>
                        <div className={"company_registration_input_container"} id={"image_container"}>
                            <label className={"company_registration_label"}>
                                <img
                                    src={imagePreview}
                                    alt="Pré-visualização da imagem"
                                    id="image_preview"
                                    title={"Clica para carregar a logo da sua empresa ou algo que poça representar"}
                                />
                                <input
                                    type="file"
                                    className={"company_registration_input"}
                                    id={"company_image"}
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                            </label>
                            <div className={"feedback"} id={"company_image_input_feedback"}>Clica na imagem acima para adicionar a sua imagem</div>
                        </div>

                        <div className={"company_registration_input_container"}>
                            <input
                                type="text"
                                className={"company_registration_input"}
                                id={"company_name"}
                                placeholder={"Insira o nome da sua empresa"}
                            />
                            <div className={"feedback"} id={"company_name_input_feedback"}>{empty_error_massage}</div>
                        </div>

                        <div className={"company_registration_input_container"}>
                            <input
                                type="email"
                                className={"company_registration_input"}
                                id={"company_email"}
                                placeholder={"Insira seu email ou da sua empresa"}
                            />
                            <div className={"feedback"} id={"company_email_input_feedback"}>{empty_error_massage}</div>
                        </div>

                        <div className={"company_registration_input_container"}>
                            <input
                                type="text"
                                className={"company_registration_input"}
                                id={"company_service"}
                                placeholder={"Insira o tipo de serviço ou produto"}
                            />
                            <div className={"feedback"} id={"company_service_input_feedback"}>{empty_error_massage}</div>
                        </div>

                        <div className={"company_registration_input_container"}>
                            <textarea
                                className={"company_registration_input"}
                                id={"company_description"}
                                placeholder={"Insira a descrição dos seus serviços"}
                                maxLength={maxLength}
                            />
                            <div className={"feedback"} id={"company_description_input_feedback"}>{empty_error_massage}</div>
                        </div>

                        <div className={"button_container"}>
                            <button className={"standard_button deny"}>Cancelar</button>
                            <button className={"standard_button accept"}>Submeter</button>
                        </div>

                    </form>
                </section>
            </main>
        </>
    );
}

export default Register;
