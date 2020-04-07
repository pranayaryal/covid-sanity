# covid-sanity
This is a fork from Andrej Karpathy's <a href="https://github.com/karpathy/covid-sanity" target="_blank">covid-sanity project</a>

This project organizes the preprints from medarxiv and bioarxiv which house scientific papers before they are published.  This is for the public's quick and free access.

The front-end has been modified using React.
The back-end has also been modified to serve json.

```
cd server
pip install -i requirements.txt 
python run.py ##to create the data
python serve.py to serve the flask app

## then
cd client
npm install
npm start
```
Still working on the cron job that runs the data download.
