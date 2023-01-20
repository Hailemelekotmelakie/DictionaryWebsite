import Axios from 'axios'
export default {
    data() {
        return {
            error: "",
            formData: {
                ADSCompanyName: null,
                ADSCompanyContent: null,
                Link: null,
                Note: null,
            },
        }
    },
    methods: {
        async updater() {
            await Axios.get(this.FIREBASE_URL + `/ads.json`)
                .then((res) => {
                    this.mapData(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => {
                    console.log("Finally");
                });
        },
        makeFormDataNull() {
            this.formData.ADSCompanyName = null;
            this.formData.ADSCompanyContent = null;
            this.formData.Link = null;
            this.formData.Note = null;
        },
        isFormFilled() {
            return (this.lengthValidator(this.formData.ADSCompanyName) &&
                this.lengthValidator(this.formData.ADSCompanyContent))
                ? true : false
        },
        lengthValidator(content) {
            this.error = null
            return (content == null)
                ? false
                : (content.length < 50 && content.length > 4) ? true : false
        }
    }
}