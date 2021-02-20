import React from 'react';
import { Grid } from '@material-ui/core';

import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectados"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de casos ativos de COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recuperados"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de recuperações do COVID-19. "
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Mortes"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de mortes causadas por COVID-19."
        />
        <CardComponent
          className={styles.active}
          cardTitle="Ativos"
          value={actives.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Número de casos ativos de COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
