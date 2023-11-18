import React, { useEffect, useState } from 'react'

function FileUpload() {
    const [data, setData] = useState({ filename: "", role: "", fileData: "" });
    const [allData, setAllData] = useState([])
    const handleTextInput = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
        console.log(data);
    };

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("data"));

        if (!!data) {
            setAllData(data)
        }
        else {
            let dataArray = []
            localStorage.setItem('fileData', JSON.stringify(dataArray));
        }

    }, []);

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                console.log("fileReader", fileReader.result);
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);

        setData({ ...data, fileData: base64 });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllData([...allData,data])
        localStorage.setItem('fileData', JSON.stringify(allData));
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <form>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px", textAlign: "center", marginBottom: "20px" }}><h3>Upload File</h3></div>
                <div style={{ marginBottom: "20px" }}>
                    <label>
                        User Role:
                        {" "}
                        <input
                            type="text"
                            name="role"
                            value={data.role || ""}
                            onChange={handleTextInput}

                        />{" "}
                    </label>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ marginRight: "20px" }}>
                        Upload File:
                        {" "}
                        <input
                            type="file"
                            name="myFile"
                            onChange={(e) => handleFileUpload(e)}
                        />
                        {" "}
                    </label>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    {" "}
                    <button onClick={handleSubmit}>SUBMIT</button>{" "}
                </div>{" "}
            </form>
        </div>
    )
}

export default FileUpload