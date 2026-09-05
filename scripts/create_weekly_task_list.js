module.exports = async (params) => {
    const { variables } = params;

    const start = moment().startOf("isoWeek");
    const end = moment(start).endOf("isoWeek");

    variables.filename = `TSK_${start.format("YYYY-MM-DD")}_${end.format("YYYY-MM-DD")}`;
};
