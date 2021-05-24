import Project from '../models/projectModel';

export async function getProjects(req, res) {

    try {
        let Projects = await Project.findAll();

        return res.json({
            ok: true,
            projects: Projects
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

export async function getProjectById(req, res) {
    const { id } = req.params;

    try {
        let project = await Project.findOne({
            where: {
                id
            }
        });

        return res.json({
            ok: true,
            project: project
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;

    try {
        let newProject = await Project.create(
            {
                name,
                priority,
                description,
                deliverydate
            },
            {
                fields: ['name', 'priority', 'description', 'deliverydate']
            }
        );

        if (newProject) {
            return res.json({
                ok: true,
                message: 'Project created successfully.',
                project: newProject
            });
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

export async function updateProjectById(req, res) {
    const { id } = req.params;
    const { name, priority, description, deliverydate } = req.body;

    try {

        let project = await Project.update(
            {
                name,
                priority,
                description,
                deliverydate
            },
            {
                where: {
                    id
                },
                fields: ['name', 'priority', 'description', 'deliverydate'],
                returning: true
            }
        );

        return res.json({
            ok: true,
            project: project[1]
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}

export async function deleteProjectById(req, res) {
    const { id } = req.params;

    try {
        let deleteRowCount = await Project.destroy({
            where: {
                id
            }
        });

        return res.json({
            ok: true,
            deletedCount: deleteRowCount
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

}