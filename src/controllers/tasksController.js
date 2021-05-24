import Task from '../models/taskModel';

export async function getTasks(req, res) {

    try {
        let Tasks = await Task.findAll({
            attributes: ['id', 'name', 'done', 'projectid'],
            order: [
                ['id', 'DESC']
            ]
        });

        return res.json({
            ok: true,
            task: Tasks
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

};

export async function getTaskById(req, res) {
    const { id } = req.params;

    try {
        let task = await Task.findOne({
            where: {
                id
            },
            attributes: ['id', 'name', 'done', 'projectid']
        });

        return res.json({
            ok: true,
            task: task
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

};

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;

    try {
        let newTask = await Task.create(
            {
                name,
                done,
                projectid
            },
            {
                fields: ['name', 'done', 'projectid']
            }
        );

        if (newTask) {
            return res.json({
                ok: true,
                message: 'Task created successfully.',
                task: newTask
            });
        }
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

};

export async function updateTaskById(req, res) {
    const { id } = req.params;
    const { name, done, projectid } = req.body;

    try {

        let task = await Task.update(
            {
                name,
                done,
                projectid
            },
            {
                where: {
                    id
                },
                fields: ['name', 'done', 'projectid'],
                returning: true
            }
        );

        return res.json({
            ok: true,
            task: task[1]
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }

};

export async function deleteTaskById(req, res) {
    const { id } = req.params;

    try {
        let deleteRowCount = await Task.destroy({
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

};

export async function getTasksByProject(req, res) {
    const { projectid } = req.params;

    try {
        let tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            where: { projectid }
        });

        res.json({
            ok: true,
            tasks: tasks
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Somethin goes wrong.'
        })
    }
};