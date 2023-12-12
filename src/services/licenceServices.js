const LicenceModel = require('../models/licenceModel');

const getAllItemsLicences = async () => {
    return await LicenceModel.getAll();
};

/* const getLicenceIDByLicenceName = async (params) => {
    return await LicenceModel.getLicenceIDByLicenceName({params});
} */

module.exports = {
    getAllItemsLicences
    //, getLicenceIDByLicenceName
};