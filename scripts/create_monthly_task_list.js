module.exports = async (params) => {
    const { variables } = params;

    variables.filename = `TSK_${moment().format("YYYY-MM")}`;
};
