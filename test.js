// @ts-check

/**
 * @typedef {typeof import('@actions/github').context} Context
 * @typedef {ReturnType<typeof import('@actions/github').getOctokit>} Github
 */
/**
 * @param {{context: Context, github: Github, run_id: number}} input
 */
module.exports = async ({ context, github, run_id }) => {
  console.log(
    await github.actions.listWorkflowRunArtifacts({
      ...context.repo,
      run_id,
    })
  );
};
