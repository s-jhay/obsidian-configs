module.exports = async (params) => {
    const { quickAddApi, variables } = params;

    const input = await quickAddApi.inputPrompt("Reference name:");

    if (!input) return;

    // Keep the original title for frontmatter
    variables.note_title = input.trim();

    // Create a filename from the given input
    variables.filename = input
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-");
};
