import subprocess

class Executor:

    def run_system(self, command):
        try:
            result = subprocess.run(
                command,
                shell=True,
                capture_output=True,
                text=True
            )

            return result.stdout + result.stderr

        except Exception as e:
            return str(e)
