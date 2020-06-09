import http from "../utils/httpHelper";

export default {
	async login({baseUrl="", payload={username:"",password:""}}) {
		let tokenCookieName = "token:authservice";

		let path = `/login`;
		return http.makePostRequest(path, baseUrl, tokenCookieName, payload, errorMessageBuilder);
	},
	async verifyToken({baseUrl="", token=""}) {
		let tokenCookieName = "token:authservice";

		let path = `/verifyToken`;
		return http.makePostRequest(path, baseUrl, tokenCookieName, {token}, errorMessageBuilder);
	}

}


let errorMessageBuilder = (response) => {
	// let errorCode = (response.errorData && response.errorData.code) || '0';
	// if(response.status == 404){
	//     return notFoundErrorMessages[errorCode];
	// }
	// if(response.status == 400) {
	//     return badRequestErrorMessages[errorCode];
	// }
	// if(response.status == 409) {
	//     let conflictErrorMessage = {...conflictErrorMessages[errorCode]};

	//     if(errorCode == '1009'){
	//         let merchantSku = response.errorData && response.errorData.errorDetail && response.errorData.errorDetail.merchantSku;
	//         conflictErrorMessage.message = conflictErrorMessage.message.replace('{merchantSku}', merchantSku);
	//     }
	//     return conflictErrorMessage;
	// }

	// return unexpectedErrorMessage;

	return response;
}

