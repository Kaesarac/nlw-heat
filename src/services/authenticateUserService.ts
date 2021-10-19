import axios from "axios";

class authenticateUserService{
    async execute(code: string){
        const url = "https://github.com/login/oauth/access_token";

        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.github_client_id,
                client_secret: process.env.github_client_secret,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
            
        })
        return response.data;
    }
}

export { authenticateUserService };