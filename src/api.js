import { get, post, put } from "./utils/net";

export const login = (email, password) => {
    return post("/login", { email, password });
};

export const createCustomer = (params) => {
    return post("/customers", params);
};

export const updateUserEula = (data) => {
    const { userId, termAgreement } = data;
    return post(`/users/${userId}/termAgreement`, { termAgreement });
};

export const getCurrentUser = () => {
    return get("/current_user");
};

export const createApplication = (params) => {
    return post("/applications", params);
};

export const activateApplication = (params) => {
    const { applicationId, data } = params;
    return post(`/activateApplication/${applicationId}`, data);
};

export const createIdentityDocument = (params) => {
    return post("/createIdentityDocument", params);
};

export const calculateEmi = (params) => {
    return post("/emi", params);
};

export const updateCustomer = (data, payload) => {
    const { id } = payload;
    return put(`/customers/${id}`, data);
};

export const updateCustomerEmployment = (params) => {
    const { profile , employment } = params
    const { clientId } = profile.data
    return put(`/customers/${clientId}`, { profileId: profile.data.id, employmentId: employment.data.id });
};

export const updateApplication = (params) => {
    const { applicationId, id } = params.data.data;
    return put(`/applications/${applicationId}`, { loanId: id });
};

export const updateApplicationStatus = (params) => {
    const { applicationId, data } = params;
    return put(`/applications/${applicationId}`, data);
};

export const getApplications = (params) => {
    let url = `/applications?pageNum=${params.pageNum}&perPage=10`;
    if (params.searchWord !== "" && params.option !== "") {
        url = `/applications?s=${params.searchWord}&filter=${params.option}&pageNum=${params.pageNum}&perPage=10`;
    } else if (params.searchWord !== "") {
        url = `/applications?s=${params.searchWord}&pageNum=${params.pageNum}&perPage=10`;
    } else if (params.option !== "") {
        url = `/applications?filter=${params.option}&pageNum=${params.pageNum}&perPage=10`;
    }

    return get(url);
};

export const getVehcile = () => {
    return get("/vehicles");
};

export const getEmploymentTypes = () => {
    return get("/employmentTypes");
};
export const documentCategoryList = () => {
    return get("/documentCategories");
};

export const documentTypeList = (categoryId) =>
    get(`/documentTypes/${categoryId}`);

export const industryTypeById = (industryId) =>
    get(`/industryTypes/${industryId}`);

export const getCustomers = (params) => get(`/customers`, { params });

export const getApplicationById = (applicationId) => {
    return get(`/applications/${applicationId}`);
};

export const getGuarantorsById = (applicationId) => {
    return get(`applications/${applicationId}/guarantors`);
};

export const getPaymentListById = (applicationId) => {
    return get(`applications/${applicationId}/paymentSchedules`);
};

export const getDocumentListById = (applicationId) => {
    return get(`applications/${applicationId}/documents`);
};

export const getPaymentDetailById = (paymentId) => {
    return get(`/paymentSchedules/${paymentId}`);
};
export const getReferenceById = (applicationId) => {
    return get(`applications/${applicationId}/references`);
};

export const createEmployment = (params) => {
    return post("/employmentStatus", params);
};

export const createProfile = (params) => {
    return post("/profile", params);
};

export const getCities = () => {
    return get("/cities");
};

export const getOutlets = () => {
    return get('/outlets')
}

export const createLoan = (params) => {
    return post("/loans", params);
};

export const createReference = (params) => {
    return post("/references", params);
};

export const verifyOtp = (params) => {
    return post("/verify", params);
};

export const calculateCde = (params) => {
    return post("/cde", params);
};

export const getEula = () => get("/eula");

export const createGuarantor = (params) => {
    const formData = new FormData();
    formData.append("relationShip", params.relationShip);
    formData.append("salutation", params.salutation);
    formData.append("name", params.name);
    formData.append("birthday", params.birthday);
    formData.append("gender", params.gender);
    formData.append("phone", params.phone);
    formData.append("email", params.email);
    formData.append("employmentTypeId", params.employmentTypeId);
    formData.append("industryId", params.industryId);
    formData.append("companyName", params.companyName);
    formData.append("addressProofId", params.addressProofId);
    formData.append("idTypeId", params.idTypeId);
    formData.append("idNumber", params.idNumber);
    formData.append("selfPhoto", params.selfPhotoUrl);
    formData.append("idFrontImg", params.idFrontImgUrl);
    formData.append("idBackImg", params.idBackImgUrl);
    formData.append("addressProofTypeId", params.addressProofTypeId);
    formData.append("country", params.country);
    formData.append("postalCode", params.postalCode);
    formData.append("province", params.province);
    formData.append("city", params.city);
    formData.append("address", params.address);
    formData.append("addressProof", params.addressProofUrl);
    return post(`/applications/${params.applicationId}/guarantors`, formData);
};
export const createCustomerDocument = (params) => {
    const formData = new FormData();
    formData.append("idTypeId", params.idTypeId);
    formData.append("idNumber", params.idNumber);
    formData.append("selfPhoto", params.selfPhotoUrl);
    formData.append("idFrontImg", params.idFrontImgUrl);
    formData.append("idBackImg", params.idBackImgUrl);
    formData.append("addressProof", params.addressProofTypeId);
    formData.append("country", params.country);
    formData.append("postalCode", params.postalCode);
    formData.append("province", params.province);
    formData.append("city", params.city);
    formData.append("address", params.address);
    formData.append("addressProof", params.addressProofDocumentUrl);
    formData.append("incomeProofTypeId", params.incomeProofTypeId);
    formData.append("monthlyIncome", params.monthlyIncome);
    formData.append("incomeProof", params.incomeProofUrl);

    return post(`customers/${params.clientId}/identity`, formData);
};

export const updateDocument = (params) => {
    const formData = new FormData();
    formData.append("categoryId", params.categoryId);
    formData.append("documentTypeId", params.documentTypeId);
    formData.append("status", params.status);
    formData.append("createdBy", params.createdBy);
    formData.append("document", params.document);
    formData.append("note", params.note);

    return post(`application/${params.applicationId}/document`, formData);
};

export const updateLoan = (params) => {
    const { loanId, data } = params;
    return put(`/loans/${loanId}`, data);
};

export const updateReference = params => {
    const { referenceId, data} = params
    return put(`/references/${referenceId}`, data);
}

export const updateGuarantor = params => {
    const { guarantorId, data } = params
    return put(`/guarantors/${guarantorId}`, data)
}

export const getTransctions = params => {
    const { applicationStringId } = params
    return get(`/cde/transactions/${applicationStringId}`)
}

export const createTransaction = data => {
    return post("/cde/transactions", data);
}

export const getCurrMonthCustomerCount = (params) => {
    let url = `/customer-count`;
    if (params && params.branchId !== "") {
        url = `/customer-count?filter=${params.branchId}`;
    }
    return get(url);
}

export const getCurrMonthApplicationStats = (params) => {
    let url = `/applications/payment-type-info`;
    if (params && params.branchId !== "") {
        url = `/applications/payment-type-info?filter=${params.branchId}`;
    }
    return get(url);
}

export const getApplicationInfo = params => {
    let url = `applications/info`;
    if (params && typeof(params.branchId) !== 'undefined') {
        url = `applications/info?filter=${params.branchId}`;
    }
    return get(url);
}

export const getApplicationByMonthsStats = () => {
    return get(`/applications/stats`)
}
